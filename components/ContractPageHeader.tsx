import { PageHeader } from './PageHeader'

interface ContractPageHeaderProps {
  title: string
  description?: string
  link: string
}

export const ContractPageHeader = ({ title, description, link }: ContractPageHeaderProps) => {
  return (
    <PageHeader title={title}>
      {description}
    </PageHeader>
  )
}
