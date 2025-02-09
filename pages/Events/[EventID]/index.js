import EventRegistrationForm from '@/components/EventRegistrationForm';
import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
    const router = useRouter()
    const {EventID} = router.query
    return (
        <div className='lg:mx-0  '>

            <EventRegistrationForm EventID={EventID}></EventRegistrationForm>
        </div>
    );
}

export default Index;
