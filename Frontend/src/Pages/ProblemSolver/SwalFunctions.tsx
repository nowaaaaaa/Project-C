import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Translate } from '../../Components/Languages/Translator';

const MySwal = withReactContent(Swal)

export function swalA() {
  var color = ''
  if (localStorage.theme === "light") {
    color = "#FFFFFF"
  }
  else {
    color = "#1e293b"
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
  var buttonText = Translate('Continue')
  if (localStorage.theme === "light") {
    color = "#FFFFFF"
  }
  else {
    color = "#1e293b"
  }
  var text = ''
  if (prob === '' && exp === '') {
    text = Translate('Problem and expected behaviour fields left empty')
  }
  else if (prob === '') {
    text = Translate('Problem field left empty')
  }
  else if (exp === '') {
    text = Translate('Expected behaviour field left empty')
  }
  MySwal.fire({
    title: <p className='dark:text-cyan-400'>{text}</p>,
    icon: 'error',
    confirmButtonText: buttonText,
    confirmButtonColor: '#2F80ED',
    background: color,
    width: '400px',
    padding: '3em',
  })
}

export function swalC() {
  var color = ''
  var buttonText = Translate('Continue')
  if (localStorage.theme === "light") {
    color = "#FFFFFF"
  }
  else {
    color = "#1e293b"
  }
  MySwal.fire({
    title: <p className='dark:text-cyan-400'>{Translate('Checkbox left unchecked')}</p>,
    icon: 'error',
    confirmButtonText: buttonText,
    confirmButtonColor: '#2F80ED',
    background: color,
    width: '400px',
    padding: '3em',
  })}