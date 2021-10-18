import ProjectType from '../components/project/Project'
import plurisGif from '../images/pluris-certo.gif'
// import dasGif from '../images/das-travel.gif'
// import camillaGif from '../images/camilla-chagas.gif'

export default function PlurisProject() {
  return (
    <ProjectType
      projectName="Pluris Engenharia"
      projectGif={plurisGif}
      projectGif2={plurisGif}
      gifAlt="Gif Pluris Project"
      descriptionTitle="Project Description"
      description1="In this project the client asked for use some SEO techniques, and as I was in charge of almost everything as Deploying, Design, and the technology I needed to study and find the technology and techniques that would fit well to attend client's desires.So I chose NextJs that was perfectly for this project. This frame work offers a lot of features that could help to make the page Server Side Redering using React.js and for me as a junior helped me to improve the organization of the folder's structure. Also, one of the features that I used in this project from Next.js was Image. This feature gives the basic staff that you need for sizing and make the image look as you want without touch in CSS directly"
      description2="So I tried to make the code as clean and readable as possible, and as NextJs already give the folders pre organized I just tried to keep the logical of thinking following documentation examples for create new folders and make the structure as simple as possible."
      description3="For deploying I used Reroku while wasn't ready just for the client could check, and after that the deploy was made by AWS S3. And for sending e-mails I also use AWS."
    />
  )
}
