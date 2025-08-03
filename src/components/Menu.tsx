const pagenames = [
	{
		title: 'About',
		link: 'about',
	},
	// {
	// 	title: 'Gallery',
	// 	link: '/gallery',
	// }
];

function Menu() {
  return (
    <ul className="flex flex-col text-base font-extrabold" >
    {pagenames.map(function(data) {
      return (
          <li key={data.title} className="pt-2"><a href={data.link}>{data.title}</a></li>
      )
    })}
    </ul>

  )
}
export default Menu;



// const pagenames = [
// 	{
// 		title: 'About',
// 		link: '/about',
// 	},
// 	{
// 		title: 'Gallery',
// 		link: '/gallery',
// 	}
// ];


// export default function Menu(pagenames: Array<string>) {
//     return (
//       <>
//       {pagenames.map(function(data) {
//         return (
//           <div>
//             Applicant name:  {data.title}
//           </div>
//         )
//       })}
//       </>
  
//     )
//   }

// 
//     return (
//         <ul className="text-2xl font-extrabold" >
//             {pagenames.map(function(pg) => (
//                 <li>{pg.title}</li>
//             ))
//             }
//         </ul> 
//     );
// }