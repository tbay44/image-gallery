# Image Gallery

> This image-gallery micro-service contains components for the main image view, a display of extra product images, and many events to interact with these components. The most notable feature of this micro-service is the native implenetation of a zoom feature with vanilla JS, HTML, and CSS. No external library was utilized to achieve the zoom effect and its accompanying modal components. http://ec2-54-183-11-36.us-west-1.compute.amazonaws.com/

### Demo
> ![ZOOM](https://media.giphy.com/media/efCaJJCkqQyjWw1n6E/giphy.gif)

### Thoughts

> This was a really fun project for me, I challenged myself to implement the zoom feature without the use of any external zoom libraries. The goal was to mirror ebay's zoom feature as closely as possible o/

### Tech Stack

> Front: Javascript CSS/HTML React

> Server: Express (Node.js)

> DB: Mongo hosted by Atlas

### Deployment Notes

> In my research, generally the hardest way of doing something teaches me the most, and it helps me come to appreciate techonologies that simplify complex processes. So, I decided I'll deploy this micro-service without elastic beanstalk, and without docker. This led me down many paths regarding port routing, process management, automating deployment for continuous delivery and integration of commits, and a journey with SSH.

### Devops Stack

> AWS EC2 t2.micro

> PM2 as process manager and for deployment scripting

> nginx server to route port to 8080
