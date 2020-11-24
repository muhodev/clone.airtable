import React, { useState } from 'react'
import styled from "styled-components"
import RootModal from '../Modal/RootModal'
import { ReactComponent as FaceIcon } from "../Icons/Face.svg"
import { InputControl, LabelDescription } from '../Form'
import { Input, Label, PasswordInput } from '../Form/style'
import PrimaryButton from '../Button/PrimaryButton'
import { useLocation, useHistory } from "react-router-dom"
import instance from '../../axios'
import { Loader } from '../Loading'
import Spinner from '../Spinner'

const FormWrapper = styled.form`
    padding-top: 10px;
`

function LoginModal(props) {
    console.log("render login modal")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setLoading] = useState(false)

    const location = useLocation()
    const history = useHistory()

    const loginHandler = async (e) => {
        try {
            e.preventDefault()
            setLoading(true)
            const userData = await instance.post("/users/login", {
                email,
                password
            })
            setLoading(false)
            console.log(userData)
            history.push(location.pathname)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <RootModal width="35%" title="Giriş Yap" titleIcon={<FaceIcon />}>
            <LabelDescription>
                Sisteme giriş yaparak tahsilatlarınızın takibini kolayca yapabilir ve uygulamayı güvenli bir şekilde kulanabilirsiniz.
            </LabelDescription>
            <FormWrapper onSubmit={loginHandler.bind(this)}>
                <InputControl>
                    <Label>Email</Label>
                    <Input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email adresinizi girin" />
                </InputControl>
                <InputControl>
                    <Label>Şifre</Label>
                    <PasswordInput
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </InputControl>
                <InputControl>
                    <PrimaryButton type="submit" disabled={isLoading} >Giriş Yap
                        {
                            isLoading && <Spinner />
                        }
                    </PrimaryButton>
                </InputControl>
            </FormWrapper>
        </RootModal>
    )
}

export default LoginModal