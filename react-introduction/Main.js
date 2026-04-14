
 const cards = [
  {
      title: 'The Last Braincell',
      img:"https://wallpapers.com/images/hd/cute-funny-cat-pictures-93mkt479cwb3d1rd.jpg",
  },  
  {
      title: 'The End is Near',
      img: "https://i.pinimg.com/736x/aa/aa/88/aaaa888539a796416d03ac60937677e0.jpg",
  },
  {
      title: 'The Porcalin Throne',
      img: "https://thumbs.dreamstime.com/b/funny-domestic-cat-reading-newspaper-tray-bentonite-filler-domestic-cat-reading-newspaper-tray-bentonite-224203113.jpg", 
  }
]
const content = [{
  text:'This is why you need a cat'
},
{ text:"You can aquire one at your local shelter :)"}

]
 function Main() {
return (
  <main>
    <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
       {cards.map((card, index) => <Card key={index} title={card.title} image={card.img} />)}

        {content.map((content, index) => <Content key={index} text={content.text}/>)}
    </div>
          <Flex classNames="bg-red-200 text-red-600">
  <span>Child tag one</span>
  <span>Child tag two</span>
  <span>Child tag three</span>
</Flex>
  </main>
);
}