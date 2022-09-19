import {  useNavigate } from 'umi'
export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Welcome to umi!</h2>

      <p onClick={()=>navigate('/micro-react')}>microReact</p>
    </div>
  );
}
