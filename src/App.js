import './App.css'
import Testimonials from './components/Testinmoials'
import Content from './components/content'

function App() {
    return (
        <div className='body'>
            <div className='container'>
                <Testimonials image="https://s3-alpha-sig.figma.com/img/fce7/6251/0393bebe5cfe1823cc7c5a0d9099b809?Expires=1667174400&Signature=ATPyONk5R6tupfai-9k6S7Clkh7UTU0JlWCeK-9e6A3qPzhLLJNAOMdtmsmDqTLcfER6-Z5aOj1BPbNRNcprA0pS7tGVchqy87uH5AdN39ha0pat1fqZ7ZD5QxMeO6WPvkEVwzgU~Ln175J3~xlBgE1fD1VL3lPMmyu-crd26G5SgAtC0Bfg-hg81~BkcMK7B9NjH8uNNTZLm-v46k1fVBzCotuTqUJ9jxcy5zvEfFKl-dTKAiqSPOrxKsWey7yQRcWbnUB95vgtrgBgUIoWQpwtt7vZXx-MtuY9jO-zF9UjF-ip~2elZMCls4fvvuABB1GYc0~FPO0Est4M0UnElA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    firstName="Amy"
                    lastName="Classen"
                    paragraph="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
                    star={[0, 1, 2, 3, 4]} />
            </div>
            {/* <div className='container'>
                <Testimonials image="https://s3-alpha-sig.figma.com/img/29b2/ae72/4b79d1c5f26c03aa28a9f00aca28edf0?Expires=1667174400&Signature=Livjh2RAkCmojXaa9k08XXpeWZ30-5UrZ-RJMxJ8rDyVqhfqxyyzI6botAMm3gWp5-vG1iF-kOo-JMJcJOdWnLKDM8Poq91iZt-TFYBIxiZO28RZSibHmE4-S7w3~5xBfRUfnfm4p6BIn7WgR5FgDp~lH-cdmP2Q3V5XzgYage~o6IM0tkeZMFnMYTOWkeWfZtjpccC5qMgm3cB-lK0JoFoJsIT6udsL08Bm07xCzeIjnuBJTW6pzOAo8ZtdiKzoCrZf1tBt3lK7Yej068vzMtX3dnKHEj9hLkIX-dw7cnW5MPy-XfG-0kqiG8N7VesLkxQTCPO72oqY9S55HvZnMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    firstName="Jane"
                    lastName="Cooper"
                    paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    star={[0, 1, 2, 3]} />
            </div>
            <div className='container'>
                <Testimonials image="https://s3-alpha-sig.figma.com/img/fb7e/f9a3/a43365766694c7b11827a8a31bd30f7b?Expires=1667174400&Signature=LXcZRn3VOaNw2zxlnvm5P~1KFOFwOLX7IP9yFOnpOrVdttZ0Qw~xccWuaRdkMsq3tDPlnEep-HwHCUxZF8sVIEtqGQxcpExXngDbFwfmuOsHL6IIVQnd4qNJ9ulMyoglnGyirOGycjPUxeNCgwglM1BPOcub-ZMZYj3mmnhNugRfPY49dHb7YELUo-oFJJ~J8vYOW8yw7ITaU6row~k4UUzLeWWGePXNbys96G7~CUS8NEMfG-fqMMOw0D4wX3mpnLQSHzaRPz8YXzQ5Frq7HK0wzsX19v8pARvN8Zdx9xnA~UagbeS6O50gH~~6gIjtVUdfg2c7weBMoiXTadIqXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    firstName="Eleonar"
                    lastName="Pena"
                    paragraph="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
                    star={[0, 1, 2]} />
            </div> */}
            <div className='content'>
                <Content headerImage="https://s3-alpha-sig.figma.com/img/6fb2/e23b/f477baae1703048392c9fbe1d64dc45e?Expires=1667174400&Signature=PDLrUOpGHKBtPmb5DucZvCzBsL6lgQhdtlv43UkLfskh1BrB3jlwCdiMpwpAwdZSqCKf61TP4VO896cgL~E-HE7JMLrVYhIvhWduZzD1ixQA5obARXGy-y4wBsEvXK-CNKozpOPQRnUBd9bUprZy71BHsiobC0iq663lQeDlFy0HEwDe3-wbyWFyyc4rMwE4UTICIccWqZQYohj6kuGaANC1cm36U~Uo7n1TfSeT15bqiBNNDrM-2XpybnOGC1NNPdz25TjCiIq3sBcMDpgL-xggu0kMg~5yA-FYBOh6NmmNbG5IU5uIgr8ozXeZK7qt-DZwcF1ofFpUv7oLLQICPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    title="Data-Driven Design is Killing Our Instincts"
                    text="Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team"
                    date="2nd January, 2022"
                    firstName="Amy"
                    lastName="Classen"
                    image="https://s3-alpha-sig.figma.com/img/fce7/6251/0393bebe5cfe1823cc7c5a0d9099b809?Expires=1667174400&Signature=ATPyONk5R6tupfai-9k6S7Clkh7UTU0JlWCeK-9e6A3qPzhLLJNAOMdtmsmDqTLcfER6-Z5aOj1BPbNRNcprA0pS7tGVchqy87uH5AdN39ha0pat1fqZ7ZD5QxMeO6WPvkEVwzgU~Ln175J3~xlBgE1fD1VL3lPMmyu-crd26G5SgAtC0Bfg-hg81~BkcMK7B9NjH8uNNTZLm-v46k1fVBzCotuTqUJ9jxcy5zvEfFKl-dTKAiqSPOrxKsWey7yQRcWbnUB95vgtrgBgUIoWQpwtt7vZXx-MtuY9jO-zF9UjF-ip~2elZMCls4fvvuABB1GYc0~FPO0Est4M0UnElA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
            </div>
        </div>
    )
}

export default App