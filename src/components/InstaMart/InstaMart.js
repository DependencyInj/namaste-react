import { useState } from 'react';

export const Section = ({ title, description, heading, view, setView }) => {

    return (
        <div className="border border-black m-3 p-2" >
            <div className="font-bold text-xl" >{title}</div>
            {
                view ? <button onClick={() => setView('')} className="bg-gray-400 p-2 rounded-xl">Hide</button> :
                    <button onClick={() => setView(heading)} className="bg-gray-400 p-2 rounded-xl" >Show</button>
            }
            {view && <div className="" >{description}</div>}
        </div>
    )
}


export default InstaMart = () => {
    const [view, setView] = useState('about');

    return (
        <div>
            <div className="font-bold text-3xl ml-3" >Insta Mart</div>
            <Section heading={'about'} view={view == 'about'} setView={(param) => setView(param)} title={'About instamart'} description={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'} />
            <Section heading={'team'} view={view == 'team'} setView={(param) => setView(param)} title={'Team instamart'} description={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'} />
            <Section heading={'career'} view={view == 'career'} setView={(param) => setView(param)} title={'Careers instamart'} description={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'} />
        </div>

    )
}