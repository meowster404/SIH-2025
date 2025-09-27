import React, { useState, useEffect } from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

function TabButton({ name, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-t-lg border border-b-0 ${active ? 'bg-white text-indigo-700 font-medium' : 'bg-gray-50 text-gray-600'}`}
    >
      {name}
    </button>
  )
}

export default function MyProfilePage() {
  const data = useData()
  const student = data?.activeStudent || {}
  const updateStudent = data?.updateStudent

  // split name
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [stateName, setStateName] = useState('')
  const [pincode, setPincode] = useState('')
  const [emergencyName, setEmergencyName] = useState('')
  const [emergencyPhone, setEmergencyPhone] = useState('')

  // academic
  const [course, setCourse] = useState('Bachelor of Technology (B.Tech)')
  const [branch, setBranch] = useState('Computer Science Engineering')
  const [academicYear, setAcademicYear] = useState('2024-25')
  const [currentSemester, setCurrentSemester] = useState(student.semester || '')
  const [currentCgpa, setCurrentCgpa] = useState(student.stats?.cgpa ?? '')
  const [admissionDate, setAdmissionDate] = useState('')
  const [expectedGraduation, setExpectedGraduation] = useState('')
  const [prevEducationLevel, setPrevEducationLevel] = useState("12th Standard / HSC")
  const [prevInstitution, setPrevInstitution] = useState('')
  const [prevPercentage, setPrevPercentage] = useState('')
  const [passingYear, setPassingYear] = useState('')

  const [activeTab, setActiveTab] = useState('Personal Details')

  useEffect(() => {
    if (student.name) {
      const parts = student.name.split(' ')
      setFirstName(parts[0] || '')
      setLastName(parts.slice(1).join(' ') || '')
    }
    setEmail(student.email || '')
    setPhone(student.phone || '')
    setCurrentSemester(student.semester || '')
    setCurrentCgpa(student.stats?.cgpa ?? '')
  }, [student])

  function savePersonal() {
    const fullName = `${firstName} ${lastName}`.trim()
    updateStudent?.({ name: fullName, email, phone, dob, gender, address, city, state: stateName, pincode, emergencyName, emergencyPhone })
    alert('Personal details saved')
  }

  function saveAcademic() {
    updateStudent?.({ stats: { ...student.stats, cgpa: currentCgpa }, semester: currentSemester, course, branch, academicYear, admissionDate, expectedGraduation, prevEducationLevel, prevInstitution, prevPercentage, passingYear })
    alert('Academic information saved')
  }

  return (
    <PageContainer title="My Profile">
      <div className="mb-4">
        <div className="flex gap-2">
          <TabButton name="Personal Details" active={activeTab === 'Personal Details'} onClick={() => setActiveTab('Personal Details')} />
          <TabButton name="Academic Info" active={activeTab === 'Academic Info'} onClick={() => setActiveTab('Academic Info')} />
          {/* Portfolio and Privacy removed per request */}
        </div>
      </div>

      {activeTab === 'Personal Details' && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Personal Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">First Name *</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
              <label className="text-sm text-gray-600">Last Name *</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={email} onChange={(e) => setEmail(e.target.value)} />
              <div className="text-xs text-gray-400 mt-1">Email cannot be changed</div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone Number *</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Date of Birth *</label>
              <input type="date" className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
            <div>
              <label className="text-sm text-gray-600">Gender *</label>
              <select className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-600">Address *</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>

            <div>
              <label className="text-sm text-gray-600">City *</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div>
              <label className="text-sm text-gray-600">State *</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={stateName} onChange={(e) => setStateName(e.target.value)} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Pincode *</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={pincode} onChange={(e) => setPincode(e.target.value)} />
            </div>

            <div className="md:col-span-2">
              <h4 className="font-semibold mt-4">Emergency Contact</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                  <label className="text-sm text-gray-600">Contact Name *</label>
                  <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={emergencyName} onChange={(e) => setEmergencyName(e.target.value)} />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Contact Phone *</label>
                  <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={emergencyPhone} onChange={(e) => setEmergencyPhone(e.target.value)} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-right">
            <button onClick={savePersonal} className="bg-indigo-600 text-white px-4 py-2 rounded">Save Personal Details</button>
          </div>
        </div>
      )}

      {activeTab === 'Academic Info' && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Academic Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Student ID</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={student.admission || ''} readOnly />
              <div className="text-xs text-gray-400">Student ID cannot be changed</div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Course *</label>
              <select className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={course} onChange={(e) => setCourse(e.target.value)}>
                <option>Bachelor of Technology (B.Tech)</option>
                <option>Bachelor of Science (B.Sc)</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Branch/Specialization *</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={branch} onChange={(e) => setBranch(e.target.value)} />
            </div>
            <div>
              <label className="text-sm text-gray-600">Current Semester *</label>
              <select className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={currentSemester} onChange={(e) => setCurrentSemester(e.target.value)}>
                <option>Semester 1</option>
                <option>Semester 2</option>
                <option>Semester 3</option>
                <option>Semester 4</option>
                <option>Semester 5</option>
                <option>Semester 6</option>
                <option>Semester 7</option>
                <option>Semester 8</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Academic Year *</label>
              <select className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)}>
                <option>2024-25</option>
                <option>2023-24</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">Current CGPA *</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={currentCgpa} onChange={(e) => setCurrentCgpa(e.target.value)} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Admission Date *</label>
              <input type="date" className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={admissionDate} onChange={(e) => setAdmissionDate(e.target.value)} />
            </div>
            <div>
              <label className="text-sm text-gray-600">Expected Graduation *</label>
              <input type="date" className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={expectedGraduation} onChange={(e) => setExpectedGraduation(e.target.value)} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Previous Education Level *</label>
              <select className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={prevEducationLevel} onChange={(e) => setPrevEducationLevel(e.target.value)}>
                <option>12th Standard / HSC</option>
                <option>Diploma</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">Previous Institution *</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={prevInstitution} onChange={(e) => setPrevInstitution(e.target.value)} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Previous Education Percentage *</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={prevPercentage} onChange={(e) => setPrevPercentage(e.target.value)} />
            </div>
            <div>
              <label className="text-sm text-gray-600">Passing Year *</label>
              <input className="w-full mt-1 px-3 py-2 rounded bg-gray-50" value={passingYear} onChange={(e) => setPassingYear(e.target.value)} />
            </div>
          </div>

          <div className="mt-6 text-right">
            <button onClick={saveAcademic} className="bg-indigo-600 text-white px-4 py-2 rounded">Save Academic Information</button>
          </div>
        </div>
      )}

      {/* Portfolio and Privacy content removed */}
    </PageContainer>
  )
}
