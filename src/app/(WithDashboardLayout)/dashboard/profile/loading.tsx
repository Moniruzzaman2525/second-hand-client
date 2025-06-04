import SettingsLoading from '@/components/shared/Skeleton/SettingsLoading';
import SHContainer from '@/components/ui/core/SHContainer';
import React from 'react';

const loading = () => {
    return (
        <SHContainer>
            <SettingsLoading />
        </SHContainer>
    );
};

export default loading;
