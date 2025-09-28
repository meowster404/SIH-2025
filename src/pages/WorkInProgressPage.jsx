import React from 'react';
import PageContainer from '../components/PageContainer';

export default function WorkInProgressPage() {
  return (
    <PageContainer title="Work in Progress">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">This page is under construction.</h2>
          <p className="text-gray-500 mt-2">We're working hard to bring you this feature. Please check back later!</p>
        </div>
      </div>
    </PageContainer>
  );
}