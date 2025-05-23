import React from 'react';
import ComparisonPanel from './ComparisonPanel';
import { getUserCompare } from '@/services/Compare';

const ComparePage = async () => {

    const { data: result } = await getUserCompare()


    return (
        <div>
            <ComparisonPanel products={result?.result} />
        </div>
    );
};

export default ComparePage;
