<template>
    <div>
        <body>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 class="mb-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Delivery Address</h2>
                        <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" placeholder="Enter delivery address" required>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit
                        </button>
                        <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Would you like to pick up your meal from one of our stores?</p>
                    </div> 
                    <div v-for="meal in meals" >
                         <MealCard :meal="meal"/>
                    </div>
                </div>
            </section>
        </body>
    </div>
</template>

<script setup >
    const uri = 'http://localhost:3001/meals'
    const {data: response} = await useFetch(uri)
    const meals = response._rawValue
    
</script>