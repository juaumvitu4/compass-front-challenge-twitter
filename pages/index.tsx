import React from 'react'
import Button from '../src/components/Button/Button'
import ThemeProvider from '../src/theme/ThemeProvider'

export default function HomeScreen() {
    return (
        <ThemeProvider>
            <div>
                <h1>HomePage</h1>
                <Button variant='accent'>
                    Botão Simples
                </Button>
            </div>
        </ThemeProvider>
    )
}