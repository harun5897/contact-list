import { 
    FeatureWrapper, 
    FeatureContainer,
    FeatureLabel
} from './feature.style'
import Img from '@/components/Img/Img'
import Call from '@/assets/call.png'
import Message from '@/assets/message.png'
import VideoCall from '@/assets/video-call.png'

export default function Feature() {
    return (
        <FeatureWrapper>
            <FeatureContainer>
                <Img 
                    position='center' 
                    width={40} 
                    height={40} 
                    src={Call} 
                />
                <FeatureLabel>Call</FeatureLabel>
            </FeatureContainer>
            <FeatureContainer>
                <Img 
                    position='center' 
                    width={40} 
                    height={40} 
                    src={Message} 
                />
                <FeatureLabel>Message</FeatureLabel>
            </FeatureContainer>
            <FeatureContainer>
                <Img 
                    position='center' 
                    width={40} 
                    height={40} 
                    src={VideoCall}
                />
                <FeatureLabel>Video Call</FeatureLabel>
            </FeatureContainer>
        </FeatureWrapper>
    )
}