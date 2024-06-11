import React, { useState } from 'react';
import StageSelector from './StageSelector';
import SectionCreator from './SectionCreator';
import ModuleCreator from './ModuleCreator';

const Home: React.FC = () => {
    const [stages, setStages] = useState<string[]>(['one','two','three']);
    const [selectedStage, setSelectedStage] = useState<string | null>(null);
    const [sections, setSections] = useState<{ [stage: string]: string[] }>({});
    const [selectedSection, setSelectedSection] = useState<string | null>(null);
    const [modules, setModules] = useState<{ [section: string]: any[] }>({});

    const handleCreateStage = (stage: string) => {
        setStages([...stages, stage]);
    };

    const handleSelectStage = (stage: string) => {
        setSelectedStage(stage);
    };

    const handleCreateSection = (section: string) => {
        if (selectedStage) {
            const updatedSections = {
                ...sections,
                [selectedStage]: [...(sections[selectedStage] || []), section],
            };
            setSections(updatedSections);
        }
    };

    const handleCreateModule = (module: any) => {
        if (selectedSection) {
            const updatedModules = {
                ...modules,
                [selectedSection]: [...(modules[selectedSection] || []), module],
            };
            setModules(updatedModules);
        }
    };

    return (
        <div className="p-4">
            <StageSelector stages={stages} onCreate={handleCreateStage} onSelect={handleSelectStage} />
            {selectedStage && (
                <>
                    <SectionCreator onCreate={handleCreateSection} />
                    {selectedSection && (
                        <ModuleCreator onCreate={handleCreateModule} />
                    )}
                </>
            )}
        </div>
    );
};

export default Home;
