import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router"

const signUpFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

//converte a tipagem do zod em tipagem do typescript
type SignUpForm = z.infer<typeof signUpFormSchema>

export function SignUp(){

  const navigate = useNavigate()

  const { 
      register, 
      handleSubmit,
      formState: { isSubmitting },
    } = useForm<SignUpForm>({
    resolver: zodResolver
    (signUpFormSchema),

    defaultValues: {
      email: ""
    }
  })

  async function handleSignUp(data: SignUpForm){
   try {
    console.log(data)
    await new Promise(resolve => setTimeout(resolve, 2000))

    toast.success("Restaurante cadastrado com sucesso!", {
      action: {
        label: "Login",
        onClick: () => navigate("/sign-in")
      }
    })

   } catch (error) {
    toast.error("Erro ao cadastrar o restaurante.")
   }
  }
  return(
    <>
      <Helmet 
        title="Cadastro"
      />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute top-8 right-8">
          <Link 
            to="/sign-in"
          >
            Fazer login
          </Link>
        </Button>

        <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Criar conta grátis</h1>
          <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas!</p>
        </div>
        </div>
        <form 
          className="space-y-4"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="space-y-2">
            <Label htmlFor="restaurantName"> Nome do estabelecimento</Label>
            <Input 
              id="restaurantName" 
              type="text" 
              {...register("restaurantName")} 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="managerName"> Seu nome</Label>
            <Input 
              id="managerName" 
              type="text" 
              {...register("managerName")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email"> Seu e-mail</Label>
            <Input 
              id="email" 
              type="email" 
              {...register("email")}
            />
          </div>
         
          <div className="space-y-2">
            <Label htmlFor="phone"> Seu celular</Label>
            <Input 
              id="phone" 
              type="tel" 
              {...register("phone")}
            />
          </div>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full"
          >
            Finalizar cadastro
          </Button>
          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">Ao continuar, você concorda com os nossos Termos de uso e Política de privacidade.</p>
        </form>
      </div>
    </>
  )
}