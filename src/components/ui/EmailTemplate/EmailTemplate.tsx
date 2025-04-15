interface EmailTemplateProps {
  name: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  message
}: EmailTemplateProps) => (
  <div>
    <h3>Nom: {name}</h3>
    <p>{message}</p>
  </div>
)
