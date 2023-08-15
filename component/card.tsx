interface CardProps {
    name: string
    age: number
    gender: string
    title: string
  }

    //interface beginning
   /* ang interface na:

    interface CardProps {
    name: string
    age: number
    gender: string
    title: string}; 

    hibig sabihin nan ay tinutukoy ang interface nasi CardProps siya ay nagde-decalre ng property ng props.
    ang interface na to ay naglalaman ng apat na variable na merong types nasila {name: string, age: number
    gender: string, title: string}.
  */
     //interface End

const card: React.FC<CardProps> = ({name, age, gender, title}) => {
    //const {name, age, gender} = props

    //Props beginning
    /* sa pag-declare ng props pwede yung nakaganito

          <h1>User card</h1>
          <div>Name: {props.name}</div>
          <div>age: {props.age}</div>
          <div>Gender: {props.gender}</div>

          OR

          <h1>User card</h1>
          <div>Name: {name}</div>
          <div>age: {age}</div>
          <div>Gender: {gender}</div>
          basta required ng may ES6 const {name, age, gender} = props

          OR

          <h1>User card</h1>
          <div>Name: {name}</div>
          <div>age: {age}</div>
          <div>Gender: {gender}</div>
          basta required yung functional conponent na ganito:
          const card: React.FC<CardProps> = ({name, age, gender}) => {
    
            unang paliwanag, const card: React.FC<CardProps> = ({ name, age, gender, title }) => {
                ang code nayan ay sa pag-define ng components kung saan si const card: ay tinatawag na constant Variable,
                si React.FC<CardProps> ay pang-define ng uri ng function component, si CardProps ay generic type na mag-
                receive ng expected props galing kay interface CardProps, si ({ name, age, gender, title }) => { naman ay
                ay mag-direct na kunin ang Value na meron si props na galing sa App.tsx <Card name="Carl" age={20} 
                gender="Male" title="Pogi"/> . 
    */
    //Props end
return (
    <div className='user-card'>
          <h1>{title} card</h1>
          <div>Name: {name}</div>
          <div>age: {age}</div>
          <div>Gender: {gender}</div>
        </div>
);
};

export default card