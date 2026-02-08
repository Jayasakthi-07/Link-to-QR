import { useEffect, useRef, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';

const initialOptions = {
    width: 1000,
    height: 1000,
    type: 'svg',
    data: 'https://antigravity.ai',
    image: '',
    dotsOptions: { color: '#00f0ff', type: 'rounded' },
    backgroundOptions: { color: 'transparent' },
    imageOptions: { crossOrigin: 'anonymous', margin: 20 },
    cornersSquareOptions: { type: 'extra-rounded', color: '#8b5cf6' },
    cornersDotOptions: { type: 'dot', color: '#06b6d4' }
};

export default function useQR(initialConfig = {}) {
    const [options, setOptions] = useState({ ...initialOptions, ...initialConfig });
    const qrCode = useRef(null);
    const ref = useRef(null);

    useEffect(() => {
        qrCode.current = new QRCodeStyling(options);
    }, []);

    useEffect(() => {
        if (qrCode.current) {
            qrCode.current.update(options);
        }
    }, [options]);

    useEffect(() => {
        if (ref.current && qrCode.current) {
            ref.current.innerHTML = '';
            qrCode.current.append(ref.current);
        }
    }, [ref.current]);

    const download = (format = 'png') => {
        if (qrCode.current) {
            qrCode.current.download({ name: 'qr-code-premium', extension: format });
        }
    };

    return { ref, options, setOptions, download };
}
