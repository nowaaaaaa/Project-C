import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Translate } from '../../Components/Languages/Translator';

const MySwal = withReactContent(Swal)

export function swalA() {
  var color = ''
  if (localStorage.theme === "light") {
    var color = "#FFFFFF"
  }
  else {
    var color = "#1e293b"
  }
  MySwal.fire({
    title: <p className='dark:text-cyan-400'>{Translate('Succesfully sent report')}</p>,
    icon: 'success',
    showConfirmButton: false,
    background: color,
    timer: 800
  })}

export function swalB(prob: string, exp: string) {
  var color = ''
  if (localStorage.theme === "light") {
    var color = "#FFFFFF"
  }
  else {
    var color = "#1e293b"
  }
  var text = ''
  if (prob === '' && exp === '') {
    var text = Translate('Problem and expected result fields left empty')
  }
  else if (prob === '') {
    var text = Translate('Problem field left empty')
  }
  else if (exp === '') {
    var text = Translate('Expected behaviour field left empty')
  }
  MySwal.fire({
    title: <p className='dark:text-cyan-400'>{text}</p>,
    icon: 'error',
    confirmButtonText: 'Continue',
    confirmButtonColor: '#2F80ED',
    background: color,
    width: '400px',
    padding: '3em',
  })
}

export function swalC() {
  var color = ''
  if (localStorage.theme === "light") {
    var color = "#FFFFFF"
  }
  else {
    var color = "#1e293b"
  }
  MySwal.fire({
    title: <p className='dark:text-cyan-400'>{Translate('Checkbox left unchecked')}</p>,
    icon: 'error',
    confirmButtonText: 'Continue',
    confirmButtonColor: '#2F80ED',
    background: color,
    width: '400px',
    padding: '3em',
  })}