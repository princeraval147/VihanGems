import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function WhatsAppButton() {
    return (
        <>
            <a
                href="whatsapp://send?phone=+919879294083"
                // onClick={(e) => {
                //     // fallback for devices where whatsapp:// might not work
                //     if (!navigator.userAgent.toLowerCase().includes('mobile')) {
                //         window.open('https://wa.me/919879294083', '_blank');
                //     }
                // }}
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
                // target="_blank"
                rel="noopener noreferrer"
            >
                <WhatsAppIcon />
            </a>
        </>

    );
}