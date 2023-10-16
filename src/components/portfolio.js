import {Component} from 'react';
import './portfolio.css';

class portfolio extends Component{
    render(){
        const imageUrl = process.env.PUBLIC_URL + '/My Image.jpg';
        return(
            <div class="container">
                <center><h1 class="bg-dark text-light m-1 mb-0">My Portfolio</h1></center>
                <div class="row mt-0">
                    <div class="col-md-4">
                        <img src={imageUrl} alt="Me" class="img-fluid rounded border border-info p-2 w-80 mt-5 slide-in "/>
                    </div>
                    <div class="col-md-8">
                        <div class="jumbotron jumbotron-fluid mt-5 bg-secondary border rounded">
                            <div class="container1 border border-secondary rounded">
                                <h3 class="p-2">About Me</h3>
                                <p class="p-2 one">
                                I am Katreddy Venkata Senareddy.I am a passionate Computer Science Student  with a strong foundation in full-stack web development. My goal is to create efficient and user-friendly applications that make a positive impact on people's lives. </p>
                            </div>
                        </div>

                        <div class="jumbotron jumbotron-fluid mt-1 bg-secondary border rounded">
                            <div class="container1 border border-secondary rounded">
                                <h3 class="p-2">Skills</h3>
                                <p class="p-1 one">
                                    <ul>
                                        <li>Programming: Python, Java , R</li>
                                        <li>Web-Development: HTML, CSS, JavaScript</li>
                                        <li>Database: MySQL</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div class="jumbotron jumbotron-fluid mt-1 bg-secondary border rounded">
                            <div class="container1 border border-secondary rounded">
                                <h3 class="p-2">Hobbies</h3>
                                <p class="p-1 one">
                                    <ul>
                                        <li>Playing Fps games</li>
                                        <li>Watching Anime, Webseries</li>
                                        <li>Programming</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div class="jumbotron jumbotron-fluid mt-1 bg-secondary border rounded">
                            <div class="container1 border border-secondary rounded">
                                <h3 class="p-2">Contact Me: <a href="venkata.21bce9024@vitapstudent.ac.in">Email</a> Ph.No:+91 7674804704</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default portfolio;