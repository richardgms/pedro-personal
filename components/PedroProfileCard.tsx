'use client'

import ProfileCard from '@/components/reactbits/ProfileCard'
import { personalTrainerConfig, generateWhatsAppUrl } from '@/config/personal-trainer'

export default function PedroProfileCard() {
  return (
    <div className="w-full flex justify-center">
      <ProfileCard
        avatarUrl={personalTrainerConfig.profileImage}
        miniAvatarUrl={personalTrainerConfig.profileImage}
        name={personalTrainerConfig.fullName}
        title={personalTrainerConfig.title}
        handle={personalTrainerConfig.instagram}
        status="Online"
        contactText="Fale comigo"
        showUserInfo
        enableTilt
        iconUrl="/icons/haltere-mask.svg"
        onContactClick={() => {
          window.open(generateWhatsAppUrl('general'), '_blank')
        }}
      />
    </div>
  )
} 