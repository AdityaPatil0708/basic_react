import Card from "./components/Card";

export default function App() {
  return(
    <div className="flex flex-row gap-5 justify-center">
      <Card imageSrc="./vite.svg" testimonial="Thank you, Classbot, for providing and affordable application with excellent student data management and fee management features for our coaching institute!" name="Aditya Patil" role="Web Developer"/>
      <Card imageSrc="./vite.svg" testimonial="Thank you, Classbot, for providing and affordable application with excellent student data management and fee management features for our coaching institute!" name="Aditya Patil" role="Data Analyst"/>
    </div>
  )
}
