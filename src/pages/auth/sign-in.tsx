import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"

const signInFormSchema = z.object({
  email: z.string().email(),
})

//converte a tipagem do zod em tipagem do typescript
type SignInForm = z.infer<typeof signInFormSchema>

export function SignIn(){

  const { 
      register, 
      handleSubmit,
      formState: { isSubmitting },
    } = useForm<SignInForm>({
    resolver: zodResolver
    (signInFormSchema),

    defaultValues: {
      email: ""
    }
  })

  async function handleSignIn(data: SignInForm){
   try {
    await new Promise(resolve => setTimeout(resolve, 2000))

    toast.success("Enviamos um link de autenticação para seu e-mail.", {
      action: {
        label: "Reenviar",
        onClick: () => handleSignIn(data)
      }
    })

   } catch (error) {
    toast.error("E-mail inválido.")
   }
  }
  return(
    <>
      <Helmet 
        title="Login"
      />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute top-8 right-8">
          <Link 
            to="/sign-up"
          >
            Novo parceiro
          </Link>
        </Button>
        
        <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
          <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro!</p>
        </div>
        </div>
        <form 
          className="space-y-4"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div className="space-y-2">
            <Label htmlFor="email"> Seu e-mail</Label>
            <Input 
              id="email" 
              type="email" 
              {...register("email")}
            />
          </div>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full"
          >
            Acessar painel
          </Button>
        </form>
      </div>
    </>
  )
}