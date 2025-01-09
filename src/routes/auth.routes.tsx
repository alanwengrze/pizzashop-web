import {Routes, Route} from 'react-router'
import { SignIn } from '@/pages/auth/sign-in'
import { AuthLayout } from '@/pages/_layouts/auth'
import { SignUp } from '@/pages/auth/sign-up'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  )
}