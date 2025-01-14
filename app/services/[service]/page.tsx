'use client'

import { services } from "@/data" 
import { useParams } from 'next/navigation'
import DetailedServicePage from '@/components/ServicePage'
// import { servicesData } from "@/app/data/servicesData"
import { notFound } from 'next/navigation'

export default function ServiceDetail() {
  const params = useParams()
  const slug = params.service as string
  const service = services.find(s => s.title.toLowerCase().replace(/ /g, '-') === slug)

  if (!service) {
    notFound()
  }

  return <DetailedServicePage service={service} />
}

