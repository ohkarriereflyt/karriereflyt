export default function CustomerFeedback() {
    return (
        <div className="w-3/5 mx-auto">
        <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Tilbakemeldinger fra våre kunder</h2>
        <div className="flex justify-center space-x-4">
        <div class="max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 
        1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 
        0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Anbefales!</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Jeg fikk god hjelo og en sikker prosess av Karriereflyt. Vi har nå ansatt hele tre flotte og engasjerte ansatte
    basert på Karriereflyt sine anbefalinger. Dette er fant <strong>Les mer...</strong></p>
    </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/4">Kundeanmeldelse 2</div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/4">Kundeanmeldelse 3</div>
        </div>
    </div>
    </div>
    )
}