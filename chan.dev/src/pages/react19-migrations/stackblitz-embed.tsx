import { useEffect, useRef } from 'react';
import sdk from '@stackblitz/sdk';

export function StackblitzEmbed({ projectId }: { projectId: string }) {
  const embedRef = useRef(null);

  useEffect(() => {
    if (embedRef.current) {
      sdk.embedProjectId(
        embedRef.current,
        projectId,
        {
          openFile: 'src/App.tsx',
          hideNavigation: true,
          height: 500,
          view: 'preview',
        }
      ).then(vm => {
        // You can interact with the VM here if needed
        console.log('StackBlitz Embed loaded');
      });
    }
  }, []);

  return <div ref={embedRef}></div>;
}

