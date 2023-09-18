import React from 'react';
import './About.css'; 

export default function About() {

    const MemberData = [
        {
            id: 1,
            image: "/member-pictures/user.webp",
            name: "EriC LiU",
            position: ""
        },
        {
            id: 2,
            image: "/member-pictures/user.webp",
            name: "Member 2",
            position: "Position 2"
        },
        {
            id: 3,
            image: "/member-pictures/pic-yucheng-tu.jpg",
            name: "Yucheng Tu",
            position: "Webbbbbb Developer"
        },
        {
            id: 4,
            image: "/member-pictures/user.webp",
            name: "Member 4",
            position: "Position 4"
        },
        {
            id: 5,
            image: "/member-pictures/user.webp",
            name: "Member 5",
            position: "Position 5"
        },
        {
            id: 6,
            image: "/member-pictures/user.webp",
            name: "Member 6",
            position: "Position 6"
        },
    ];

    const memberElements = MemberData.map((member) => (
        <div className="member" key={member.id}>
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
                    <p className="member-position">{member.position}</p>
        </div>))

    
    const introductorySentence = "Our Slogan Sentence go here."

    const introParagraph = "Introductory Paragraph can go here. And this following letters are just placeholders which holds more space so it actually looks like a paragraph haha. I'm going to repeat myself again: Introductory Paragraph can go here. And this following letters are just placeholders which holds more space so it actually looks like a paragraph haha."

    const membersParagraph = "We have many club members. We are so diverse omg. We want you to join us come come come."
    
    const thirdParagraph = "Whatever you want to put there to enrich the page. Whatever you want to put there to enrich the page. Whatever you want to put there to enrich the page. Whatever you want to put there to enrich the page. Whatever you want to put there to enrich the page."
        
    return (
        
            <div>
                <section className='page-banner'>
                    <div className='page-title'>ABOUT US</div>
                </section>
                <section className='content-section'>
                    <h2 className="title">01 - ABOUT UTXR</h2>
                    <p className="slogan">{introductorySentence}</p>
                    <p className="description">{introParagraph}</p>
                </section> 
                <section className='content-section'>
                        <h2 className="title">02 - ABOUT US</h2>
                        <p className="slogan">Club Members</p>
                        <p className="description">{membersParagraph}</p>
                </section> 
                <section className="member-grid">
                    {memberElements} 
                </section>
                <section className='content-section'>
                        <h2 className="title">03 - FUN FACT / STORIES / ANYTHING??</h2>
                        <p className="slogan">YOU DECIDE</p>
                        <p className="description">{thirdParagraph}</p>
                </section> 
            </div>
            )

        
}




