import React, { useState } from 'react'
import { Layout, Typography, Input, Button } from '../components/'

function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Layout>
            <div className="modal">
                <div className="modal__container">
                    <Typography tag="h2" className="mb-5">
                        Giriş Yap
                    </Typography>
                    <Input
                        className="mb-3"
                        label="Kullanıcı adı"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />

                    <Input
                        type="password"
                        className="mb-6"
                        label="Şifre"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />

                    <div>
                        <Button
                            color="primary"
                        >
                            Giriş yap
                        </Button>
                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default Login