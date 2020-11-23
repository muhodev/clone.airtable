import React from 'react'
import styled from "styled-components"
import RootModal from '../Modal/RootModal'
import { ReactComponent as FaceIcon } from "../Icons/Face.svg"
import { InputControl, LabelDescription } from '../Form'
import { Input, Label, PasswordInput } from '../Form/style'
import PrimaryButton from '../Button/PrimaryButton'

const FormWrapper = styled.div`
    padding-top: 10px;
`

function LoginModal(props) {
    console.log("render login modal")

    return (
        <RootModal width="35%" title="Giriş Yap" titleIcon={<FaceIcon />}>
            <LabelDescription>
                Sisteme giriş yaparak tahsilatlarınızın takibini kolayca yapabilir ve uygulamayı güvenli bir şekilde kulanabilirsiniz.
            </LabelDescription>
            <FormWrapper>
                <InputControl>
                    <Label>Email</Label>
                    <Input placeholder="Email adresinizi girin" />
                </InputControl>
                <InputControl>
                    <Label>Şifre</Label>
                    <PasswordInput />
                </InputControl>
                <InputControl>
                    <PrimaryButton>Giriş Yap</PrimaryButton>
                </InputControl>
            </FormWrapper>
        </RootModal>
    )
}

export default LoginModal