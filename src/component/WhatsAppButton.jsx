import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function WhatsAppButton() {

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const phone = '919879294083';
    const message = 'Hello!';
    const href = isMobile
        ? `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`
        : `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    return (
        <>
            <a
                href={href}
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
                rel="noopener noreferrer"
            >
                <WhatsAppIcon />
            </a>
        </>

    );
}