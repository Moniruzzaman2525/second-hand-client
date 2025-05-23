import React from 'react';
import ComparisonPanel from './ComparisonPanel';
import { getUserCompare } from '@/services/Compare';

const ComparePage = async () => {

    const { data: result } = await getUserCompare()
    

    return (
        <div>
            <ComparisonPanel meta={result.meta} products={result?.result} />
        </div>
    );
};

export default ComparePage;
