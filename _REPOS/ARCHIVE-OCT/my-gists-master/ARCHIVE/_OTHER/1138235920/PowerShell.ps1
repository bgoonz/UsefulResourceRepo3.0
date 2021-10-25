$action = $env:Action + "Service"
$service = $env:Service
$machine = $env:Machine

$passwd = ConvertTo-SecureString "[PasswordOfRemoteMachine]" -AsPlainText -Force
$credential = New-Object System.Management.Automation.PSCredential("[UserOfRemoteMachine]", $passwd)


(Get-WmiObject -computer $machine Win32_Service -Filter "Name='$service'" -Credential $credential).InvokeMethod($action,$null).ReturnValue