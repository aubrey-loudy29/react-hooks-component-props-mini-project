const About = ({image="https://via.placeholder.com/215" , about}) => {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About;

// import React from "react";

// const About = ({ image, about }) => {
//     return (
//         <aside>
//             <img src={image ? image : "https://via.placeholder.com/215"} alt="blog logo" />
//             <p>{about}</p>
//         </aside>
//     )
// }

// export default About;
