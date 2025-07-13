---
id: plan-001
title: Remodelagem do Site para Pedro Medeiros Personal Trainer
createdAt: 2025-07-13
author: Richard
status: draft
---

## 🧩 Scope

Adaptação completa do site de personal trainer para Pedro Medeiros (@pedutraining_bjj), mantendo a estrutura e layout atual mas personalizando toda a identidade visual, conteúdo, imagens e informações para refletir o perfil e estilo do Pedro. O foco será em jiu-jitsu, transformação corporal, consultoria online/presencial e resultados mensuráveis.

## ✅ Functional Requirements

### Identidade Visual
- Implementar nova paleta de cores baseada na logo do Pedro (azul/turquesa #00D4FF sobre fundo escuro)
- Substituir logo atual pela logo do Pedro Medeiros
- Adaptar todos os elementos visuais (botões, cards, gradientes) para a nova identidade
- Manter design minimalista conforme preferência do usuário

### Conteúdo e Informações
- Alterar nome para "Pedro Medeiros"
- Atualizar informações de contato (WhatsApp: 83 987207871)
- Modificar Instagram para @pedutraining_bjj
- Adaptar textos para focar em jiu-jitsu, transformação corporal e consultoria
- Incluir menções à plataforma online (Client.mfitpersonal.com.br)
- Destacar resultados mensuráveis e transformações

### Imagens e Mídia
- Substituir todas as fotos por imagens do Pedro Medeiros
- Usar fotos do perfil Instagram fornecidas
- Incluir fotos de competições de jiu-jitsu
- Mostrar transformações corporais dos clientes
- Adicionar imagens de avaliações físicas e consultoria

### Serviços
- Treinamento Personalizado
- Consultoria Online e Presencial
- Hipertrofia / Emagrecimento / Qualidade de vida
- Treinamento Desportivo (com foco em jiu-jitsu)
- Otimização de Resultados
- Avaliação Física + Consultoria

## ⚙️ Non-Functional Requirements

### Performance
- Manter tempo de carregamento inferior a 3 segundos
- Otimizar imagens para web (formato WebP quando possível)
- Garantir responsividade em todos os dispositivos

### Visual
- Manter estética minimalista atual
- Aplicar nova paleta de cores de forma consistente
- Garantir contraste adequado para acessibilidade
- Manter hierarquia visual clara

### SEO
- Atualizar meta tags para "Pedro Medeiros Personal Trainer"
- Otimizar para palavras-chave: "personal trainer", "jiu-jitsu", "transformação corporal"
- Atualizar structured data com novas informações

## 📚 Guidelines & Packages

### Design Guidelines
- Seguir princípios de design minimalista
- Manter consistência na nova identidade visual
- Usar tipografia limpa e legível
- Aplicar espaçamento adequado entre elementos

### Packages Atuais (manter)
- Next.js 14 (React framework)
- Tailwind CSS (styling)
- TypeScript (type safety)
- Todas as dependências atuais do package.json

### Recursos Adicionais
- Palette de cores azul/turquesa baseada na logo
- Fontes que complementem a identidade visual
- Ícones relacionados a jiu-jitsu e fitness

## 🔐 Threat Model (Stub)

- Validação de dados de contato (WhatsApp, email)
- Proteção contra spam no formulário de contato
- Segurança das imagens e conteúdo
- Proteção de informações pessoais dos clientes

## 🔢 Execution Plan

### 1. Configuração e Identidade Visual
- [ ] Atualizar arquivo de configuração `config/personal-trainer.ts`
- [ ] Substituir logo nos arquivos `public/logo/`
- [ ] Implementar nova paleta de cores no `tailwind.config.js`
- [ ] Atualizar variáveis CSS para nova identidade

### 2. Componentes Principais
- [ ] **Navigation.tsx**: Atualizar logo e informações de contato
- [ ] **HeroSection.tsx**: Modificar nome, título e descrição principal
- [ ] **AboutSection.tsx**: Reescrever sobre o Pedro, mencionando jiu-jitsu e experiência
- [ ] **PlansSection.tsx**: Adaptar planos para serviços do Pedro
- [ ] **ResultsSection.tsx**: Incluir transformações corporais com fotos antes/depois
- [ ] **Footer.tsx**: Atualizar informações de contato e links

### 3. Componentes Específicos
- [ ] **NetoProfileCard.tsx**: Adaptar para perfil do Pedro
- [ ] **WhatsAppButton.tsx**: Atualizar número para 83 987207871
- [ ] **CTASection.tsx**: Focar em agendamento de avaliação física + consultoria

### 4. Conteúdo e Textos
- [ ] Reescrever textos do hero para destacar jiu-jitsu e transformação corporal
- [ ] Adaptar descrições de serviços para incluir modalidades específicas
- [ ] Criar textos focados em resultados mensuráveis
- [ ] Incluir menções à consultoria online e presencial
- [ ] Adaptar call-to-actions para "Agende sua avaliação"

### 5. Imagens e Mídia
- [ ] Substituir imagens do diretório `public/imagens/`
- [ ] Adicionar fotos do Pedro em competições de jiu-jitsu
- [ ] Incluir fotos de transformações de clientes
- [ ] Adicionar imagens de avaliações físicas
- [ ] Otimizar todas as imagens para web

### 6. Prova Social
- [ ] Atualizar `public/prova-social/` com depoimentos reais
- [ ] Incluir resultados de transformações corporais
- [ ] Adicionar conquistas em competições de jiu-jitsu
- [ ] Mostrar certificações e qualificações

### 7. Informações de Contato
- [ ] Atualizar WhatsApp para 83 987207871
- [ ] Modificar Instagram para @pedutraining_bjj
- [ ] Incluir link para plataforma online (Client.mfitpersonal.com.br)
- [ ] Adaptar formulários de contato

### 8. SEO e Metadata
- [ ] Atualizar title tags para "Pedro Medeiros Personal Trainer"
- [ ] Modificar meta descriptions incluindo jiu-jitsu e transformação corporal
- [ ] Atualizar structured data com novas informações
- [ ] Configurar keywords relevantes

### 9. Estilos e Tema
- [ ] Aplicar nova paleta de cores (azul/turquesa #00D4FF)
- [ ] Adaptar gradientes e backgrounds
- [ ] Atualizar cores de botões e elementos interativos
- [ ] Manter consistência visual em todo o site

### 10. Testes e Validação
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Validar funcionamento de todos os links e contatos
- [ ] Verificar carregamento de imagens
- [ ] Testar formulários de contato
- [ ] Validar nova identidade visual

### 11. Detalhes Finais
- [ ] Atualizar favicon com nova logo
- [ ] Configurar analytics com novas informações
- [ ] Testar performance do site
- [ ] Validar acessibilidade
- [ ] Deploy final

## 📋 Recursos Necessários

### Conteúdo
- Textos personalizados para o Pedro Medeiros
- Depoimentos de clientes reais
- Descrições de serviços específicos
- Informações sobre modalidades (jiu-jitsu, hipertrofia, etc.)

### Imagens
- Fotos profissionais do Pedro
- Imagens de competições de jiu-jitsu
- Transformações corporais de clientes
- Fotos de avaliações físicas e consultoria

### Informações
- Dados de contato atualizados
- Certificações e qualificações
- Preços e planos de serviços
- Horários de atendimento

## 🎯 Resultado Esperado

Site completamente personalizado para Pedro Medeiros Personal Trainer, mantendo a qualidade e estrutura atual mas refletindo sua identidade única focada em jiu-jitsu, transformação corporal e consultoria especializada. O site deve transmitir profissionalismo, resultados mensuráveis e a vibe jovem e dinâmica do Pedro.
