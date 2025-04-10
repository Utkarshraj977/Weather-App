import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({Info}) {
  const init_url = "https://images.unsplash.com/photo-1676367809772-acb642a9357f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGR1c3QlMjBzdG9ybXxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="InfoBox">
      <div className='cardContainer'>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={init_url}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Info.city}
            </Typography>
            <Typography variant="body2" color='text.secondary' component={"span"}>
              <p>Temprature={Info.temp}&deg;c</p>
              <p>Humidity={Info.humidity}</p>
              <p>Min Temp={Info.tempmin}</p>
              <p>Max Temp={Info.tempmax}</p>
              <p>The Weather can be described as <i><b>{Info.weather}</b></i> and Feels Like={Info.feelslike}&deg;c</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

