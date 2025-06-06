import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function WhatsAppButton() {

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center animate-float">
            <a
                href="https://wa.me/+919879294083"
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
            >
                <WhatsAppIcon />
            </a>
        </div>
    );
}
