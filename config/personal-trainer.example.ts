// EXEMPLO DE CONFIGURAÇÃO PARA OUTRO PERSONAL TRAINER
// Este arquivo mostra como personalizar o template para João Silva

export interface PersonalTrainerConfig {
  // Informações pessoais
  name: string
  lastName: string
  fullName: string
  title: string
  cref: string
  
  // Contato
  phone: string
  whatsappUrl: string
  website: string
  instagram: string
  location: string
  locationDetail: string
  
  // Experiência
  yearsOfExperience: string
  clientsTransformed: string
  satisfactionRate: string
  
  // Biografias
  shortBio: string
  longBio: string
  
  // Imagens
  profileImage: string
  heroImage: string
  
  // Especialidades
  specialties: string[]
  
  // Planos Online
  onlinePlans: {
    monthly: string
    quarterly: string
    semiannual: string
    annual: string
  }
  
  // Planos Presenciais
  presencialPlans: {
    hybrid: string
    presencial4x: string
    presencial5x: string
  }
  
  // Horários
  schedule: {
    weekdays: string
    saturday: string
    sunday: string
    responseTime: string
  }
  
  // Logos
  logos: {
    monogram: string
    complete: string
    alt: string
  }
  
  // Mensagens WhatsApp
  whatsappMessages: {
    start: string
    online: string
    presencial: string
    methodology: string
    general: string
  }
}

// EXEMPLO: Configuração para João Silva
export const personalTrainerConfig: PersonalTrainerConfig = {
  // Informações pessoais
  name: "Seu Nome",
  lastName: "Sobrenome",
  fullName: "Seu Nome Completo",
  title: "Personal Trainer",
  cref: "000000-G/UF",

  // Contato
  phone: "(83) 98711-3897",
  whatsappUrl: "https://wa.me/5583987113897",
  website: "https://seusite.com.br",
  instagram: "seuinstagram",
  location: "Sua Cidade - UF",
  locationDetail: "Detalhes da sua localização ou atuação",

  // Experiência
  yearsOfExperience: "8+",
  clientsTransformed: "1000+",
  satisfactionRate: "99%",
  
  // Biografias
  shortBio: "Transformação corporal com foco em hipertrofia e definição muscular. Resultados reais com metodologia personalizada!",
  longBio: "Sua biografia completa aqui. Fale sobre sua paixão pelo esporte, suas especializações, e como você ajuda seus alunos a alcançarem seus objetivos. Use este espaço para se conectar com seus futuros clientes.",
  
  // Imagens (mesmos caminhos, substitua as imagens físicas)
  profileImage: "/imagens/1.png",
  heroImage: "/imagens/2.png",
  
  // Especialidades
  specialties: [
    "Hipertrofia Muscular",
    "Definição Corporal", 
    "Treinamento Funcional",
    "Avaliação Física",
    "Nutrição Esportiva"
  ],
  
  // Planos Online
  onlinePlans: {
    monthly: "R$ 120,00",
    quarterly: "R$ 300,00",
    semiannual: "R$ 540,00",
    annual: "R$ 960,00"
  },
  
  // Planos Presenciais
  presencialPlans: {
    hybrid: "R$ 450,00",
    presencial4x: "R$ 600,00",
    presencial5x: "R$ 750,00"
  },
  
  // Horários
  schedule: {
    weekdays: "Segunda a Sexta: 5h às 22h",
    saturday: "Sábado: 7h às 16h",
    sunday: "Domingo: Atendimento especial",
    responseTime: "Resposta em até 1 hora"
  },
  
  // Logos (mesmos caminhos, substitua as imagens físicas)
  logos: {
    monogram: "/logo/monogram.png",
    complete: "/logo/logocompleta.png",
    alt: "Logo de Seu Nome",
  },
  
  // Mensagens WhatsApp (automaticamente substituirá o nome)
  whatsappMessages: {
    start: "Olá! Quero começar minha transformação!",
    online: "Olá! Quero o plano ONLINE!",
    presencial: "Olá! Quero saber mais sobre os planos presenciais!",
    methodology: "Olá! Quero conhecer sua metodologia!",
    general: "Olá! Vim pelo site e quero saber sobre os planos.",
  },
}

// Função helper para gerar URLs do WhatsApp
export function generateWhatsAppUrl(messageType: keyof PersonalTrainerConfig['whatsappMessages']): string {
  const message =
    personalTrainerConfig.whatsappMessages[messageType]
  return `${personalTrainerConfig.whatsappUrl}?text=${encodeURIComponent(
    message,
  )}`
}

/* 
INSTRUÇÕES PARA PERSONALIZAR:

1. Substitua todas as informações acima com as do seu personal trainer
2. Mantenha a estrutura do objeto igual
3. Substitua as imagens físicas na pasta public/:
   - /imagens/1.png (foto de perfil)
   - /imagens/2.png (foto hero)
   - /logo/logocompleta.png (logo completo)
   - /logo/monogram.png (monograma)
4. Ajuste os preços conforme necessário
5. Personalize as mensagens do WhatsApp
6. Salve o arquivo como config/personal-trainer.ts (substitua o exemplo)
*/ 