import React from 'react'

const Home = () => {
    return (
        <div>


            <section class=" bg-blueGray-200 -mt-24">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap">
                        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                                <div class="px-4 flex-auto">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center mt-16">
                        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            {/* <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i class="fas fa-user-friends text-xl"></i>
                            </div> */}
                            <h3 class="text-3xl mb-2 font-semibold leading-normal">
                                🙌 Hello friends
                                I am SINTU and we want to start a<span class="from-purple-600"> web design</span> course together. Do you like it too 😍 ?  </h3>

                            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Start course now</button>


                        </div>

                        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg bg-pink-500">
                                <img alt="..." src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" class="w-full align-middle rounded-t-lg" />



                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div class=" flex items-center justify-center">S earch among 58340 courses and <br />find your favorite course</div>
        </div >
    )
}

export default Home