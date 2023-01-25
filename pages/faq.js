import axios from 'axios';
// import Head from 'next/head'
import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen; 

// import Link from '../src/components/Link';

export async function getStaticProps() {

    const faq = await axios.get('https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json')
            .then(res => {
                return res.data
            })

    return {
        // will be passed to the page component as props
        props: {
            faq
        }
    }
  }
  

  

// export default function FAQPage({faq}) {
//     return (
//         <div>
//             <Head>
//                 <title>FAQ - Alura Cases Campanha</title>
//             </Head>
//             <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
//             <Link href="/">
//                 Ir para a home
                
//             </Link>
//             <ul>
// 				{/* {faq.map((faq) => ( */}
//                 {faq.map(({question, answer}) => (
// 					<li key={question}>
// 						<article>
// 							<h2>{question}</h2>
// 							<p>{answer}</p>
// 						</article>
// 					</li>
// 				))}
//             </ul>
//         </div>
//     )
// }