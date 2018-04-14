import testA from '../json/CategoryA-4850.json'
import testB from '../json/CategoryB-3000.json'
import testC from '../json/CategoryC-650.json'
import testD from '../json/CategoryD-700.json'
import testE from '../json/CategoryE-800.json'

let allSections = {
  'A': testA,
  'B': testB,
  'C': testC,
  'D': testD,
  'E': testE
}
let exerciseTypes = [{
  name: '所有题目',
  type: 'all'
}, {
  name: '错题集',
  type: 'wrong'
}, {
  name: '随机测试',
  type: 'test'
}]

function getSectionDataAll (section) {
  return allSections[section][0].data.slice().splice(1)
}

function getSectionData (section, pageNumber = 0, pageCount = 10) {
  return allSections[section][0].data.slice().splice(1).splice(pageNumber * pageCount, pageCount)
}

function getSectionDataName (section) {
  return allSections[section][0].name
}

function getSectionDataProps (section) {
  return allSections[section][0].data[0]
}

function getSectionTitle (section) {
  return section + '类题-' + allSections[section][0].name
}

function getSectionList (section) {
  let sectionList = []
  for (let typeInfo of exerciseTypes) {
    sectionList[sectionList.length] = {
      name: 'Exercise',
      query: {
        type: typeInfo.type,
        section: section
      },
      showName: typeInfo.name + ' - ' + section
    }
  }
  return sectionList
}

function getSectionInfo (section) {
  return {
    title: getSectionTitle(section) + '-' + (allSections[section][0].data.length - 1),
    list: getSectionList(section)
  }
}

function getInfoSections (sections) {
  let infoSections = []
  sections = sections || allSections
  for (let section in sections) {
    infoSections[infoSections.length] = getSectionInfo(section)
  }
  return infoSections
}

export default {
  getSectionData: getSectionData,
  getSectionDataAll: getSectionDataAll,
  getSectionDataName: getSectionDataName,
  getSectionDataProps: getSectionDataProps,
  getSectionTitle: getSectionTitle,
  getInfoSections: getInfoSections
}
