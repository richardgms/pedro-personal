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

export const personalTrainerConfig: PersonalTrainerConfig = {
  // Informações pessoais
  name: "Pedro",
  lastName: "Medeiros",
  fullName: "Pedro Medeiros",
  title: "Personal Trainer",
  cref: "", // TODO: Preencher com o CREF de Pedro Medeiros

  // Contato
  phone: "(83) 98720-7871",
  whatsappUrl: "https://wa.me/5583987207871",
  website: "https://client.mfitpersonal.com.br",
  instagram: "pedutraining_bjj",
  location: "", // TODO: Preencher com a localização
  locationDetail: "Consultoria online e Acompanhamento presencial",

  // Experiência
  yearsOfExperience: "5+", // TODO: Preencher com os anos de experiência
  clientsTransformed: "200+", // TODO: Preencher com o número de clientes transformados
  satisfactionRate: "98%", // TODO: Preencher com a taxa de satisfação

  // Biografias
  shortBio:
    "Especialista em Jiu-Jitsu e transformação corporal. Consultoria online e presencial para resultados mensuráveis. Vamos construir um futuro com mais qualidade de vida?",
  longBio:
    "Sou Pedro Medeiros, Personal Trainer e atleta de Jiu-Jitsu apaixonado por transformar vidas através do movimento e do esporte. Com especialização em emagrecimento, hipertrofia e treinamento desportivo, ajudo meus alunos a alcançarem seus objetivos com resultados mensuráveis e sustentáveis. Acredito que cada corpo tem seu potencial único e aplicamos essa filosofia em cada treino, criando programas personalizados que se adaptam à sua rotina para transformações extraordinárias.",

  // Imagens
  profileImage: "/imagens/1.png",
  heroImage: "/imagens/2.png",

  // Especialidades
  specialties: [
    "Treinamento Personalizado",
    "Consultoria Online e Presencial",
    "Hipertrofia / Emagrecimento",
    "Qualidade de Vida",
    "Treinamento Desportivo",
    "Jiu-Jitsu",
    "Otimização de Resultados",
  ],

  // Planos Online
  onlinePlans: {
    monthly: "R$ 147,00",
    quarterly: "R$ 397,00",
    semiannual: "R$ 747,00",
    annual: "R$ 1.397,00",
  },

  // Planos Presenciais
  presencialPlans: {
    hybrid: "R$ 497,00",
    presencial4x: "R$ 647,00",
    presencial5x: "R$ 797,00",
  },

  // Horários
  schedule: {
    weekdays: "Segunda a Sexta: 6h às 21h",
    saturday: "Sábado: 8h às 14h",
    sunday: "Domingo: Descanso",
    responseTime: "Resposta rápida no WhatsApp",
  },

  // Logos
  logos: {
    monogram: "/logo/monogram.png",
    complete: "/logo/logocompleta.png",
    alt: "Pedro Medeiros Logo",
  },

  // Mensagens WhatsApp
  whatsappMessages: {
    start: "Olá Pedro! Quero começar minha transformação!",
    online: "Olá Pedro! Quero o plano ONLINE!",
    presencial: "Olá Pedro! Quero saber mais sobre os planos presenciais!",
    methodology: "Olá Pedro! Quero conhecer sua metodologia!",
    general: "Olá Pedro! Vim pelo site e quero agendar minha avaliação física + consultoria!",
  },
}

// Função helper para gerar URLs do WhatsApp
export function generateWhatsAppUrl(
  messageType: keyof PersonalTrainerConfig["whatsappMessages"],
): string {
  const message =
    personalTrainerConfig.whatsappMessages[messageType]
  return `${personalTrainerConfig.whatsappUrl}?text=${encodeURIComponent(
    message,
  )}`
} 