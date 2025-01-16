export function ExperienceEducation() {
  return (
    <section className="w-full max-w-[800px] mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">Background</h2>
      
      {/* Experience and Education Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#BBD1EA] rounded-xl p-8">
        {/* Work Experience Column */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
          
          <div className="max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold">Meta - Facebook</h4>
                <p className="text-sm mb-2">Remote - 2022-2024</p>
                <ul className="space-y-1">
                  <li>• Learning Solutions Partner</li>
                  <li>• Learning Consultant</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold">Austin Community College</h4>
                <p className="text-sm mb-2">Remote - 2020-2022</p>
                <ul className="space-y-1">
                  <li>• Instructional Designer</li>
                </ul>
              </div>

              {/* Additional work entries will be scrollable */}
              <div>
                <h4 className="text-xl font-semibold">American University of Iraq - Baghdad</h4>
                <p className="text-sm mb-2">Remote - 2020 - 2021</p>
                <ul className="space-y-1">
                  <li>• Instructional Designer</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold">Raytheon</h4>
                <p className="text-sm mb-2">Kabul, Afghanistan - 2018 - 2019</p>
                <ul className="space-y-1">
                  <li>• Senior Development Specialist</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold">American University of Iraq - Sulaimani</h4>
                <p className="text-sm mb-2">Sulaimaniya,Iraq - 2016 - 2018</p>
                <ul className="space-y-1">
                  <li>• Digital Media Instructor</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold">King Faisal University</h4>
                <p className="text-sm mb-2">Hofuf, Saudi Arabia - 2014 - 2016</p>
                <ul className="space-y-1">
                  <li>• Academic Skills Instructor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold">Master of Arts - Education</h4>
              <ul className="space-y-1">
                <li>• University of San Francisco</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Certifications</h4>
              <ul className="space-y-1">
                <li>• Quality Matters - APPQMR</li>
                <li>• Quality Matters - PRC</li>
                <li>• Quality Matters - LGAI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 