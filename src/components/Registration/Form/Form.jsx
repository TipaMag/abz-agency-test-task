import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import './form.sass'
import { imageCheckResolution, imageCheckSize } from '../../utils/validators'
import Button from '../../../elements/button/button'

const RegistrationForm = ({ positions, onHandleSubmit }) => {
    const { register, handleSubmit, errors } = useForm({ mode: 'onChange' })

    let [fileData, setFileData] = useState({
        fileSelected: false,
        fileName: ''
    })

    let handleChange = (fileData) => {
        if (fileData?.length) {
            let fileName = fileData[0].name
            // if (fileName.length > 30) {
            //     fileName = `${fileName.slice(0, 30)}...`
            // }
            setFileData({
                fileSelected: true,
                fileName: fileName,
            })
        } else {
            setFileData({ fileSelected: false, fileName: '' })
        }
    }

    const onSubmit = data => {
        var formData = new FormData()
        formData.append('position_id', data.position_id)
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('phone', data.phone)
        formData.append('photo', data.photo[0])

        onHandleSubmit(formData)
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

            <div className="form__control">
                <label className="form__label">Name</label>
                <input className="form__input" name="name" type="text" placeholder='Your name'
                    ref={register({
                        required: true,
                        minLength: 2,
                        maxLength: 60
                    })}/>
                {errors.name?.type === "required" && <span className="error">name is required</span>}
                {errors.name?.type === "minLength" && <span className="error">min 2 characters</span>}
                {errors.name?.type === "maxLength" && <span className="error">60 characters max</span>}
            </div>

            <div className="form__control">
                <label className="form__label">Email</label>
                <input className="form__input" name="email" type="email" placeholder='Your email'
                    ref={register({
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}/>
                {errors.email?.type === "required" && <span className="error">email is required</span>}
                {errors.email?.type === "pattern" && <span className="error">email is not correct</span>}
            </div>
            
            <div className="form__control">
                <label className="form__label">Phone number</label>
                <input className="form__input" name="phone" type="tel" placeholder='+380 XX XXX XX XX'
                    ref={register({
                        required: true,
                        pattern: /^\+38(0\d{9})$/ // /^\+?3?8?(0\d{9})$/
                    })}/>
                {errors.phone?.type === "required" && <span className="error">phone is required</span>}
                {errors.phone?.type === "pattern" && <span className="error">phone format error</span>}

                <span className="form__description">Enter phone number in open format</span>
            </div>
                
            

            <div className="positions">
                <p className="positions__title">Select your position</p>
                {positions
                    && positions.map(position => (
                        <label className="positions__radio" key={position.id}>
                            <input type="radio" name="position_id" value={position.id}
                                ref={register({
                                    required: true
                                })}/>
                            <span className='checkmark'></span>
                            {position.name}
                        </label>
                    ))
                }
                {errors.position_id?.type === "required" && <span className="error">position is required</span>}
            </div>

            <div className="loadphoto">
                <p className="loadphoto__title">Photo</p>
                <div className="loadphoto__container">
                    <span className="loadphoto__filename">{fileData.fileSelected ? fileData.fileName : 'Upload your photo'}</span>
                    <label className="loadphoto__lable">Browse
                        <input className="loadphoto__input" name="photo" type="file" accept="image/jpeg, image/jpg"
                            onChange={e => handleChange(e.target.files)}
                            ref={register({
                                required: true,
                                validate: {
                                    imageSize: value => imageCheckSize(value[0].size, 5120),
                                    imageResolution: async value => await imageCheckResolution(value[0])
                                }
                            })}/>
                    </label>
                </div>
                {errors.photo?.type === "required" && <span className="error">photo is required</span>}
                {errors.photo?.type === "imageSize" && <span className="error">5 mb maximum</span>}
                {errors.photo?.type === "imageResolution" && <span className="error">min resolution 70x70 px</span>}
            </div>

            <Button
                label='Sign up now'
                styleType='btn__primary'
                type='submit'
                position="center"
            />
        </form>
    )
}

export default RegistrationForm