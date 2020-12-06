<?php 
    include('./classes/queryDb.class.php');

    // an instance of queryDb class to call the getAllUsers method;
    $queryDb = new QueryDb();

    /* check if the users array exists in cookies and then assign it's value to the users variable, 
    if not make a call to the Db via the necessary queryDb class method which is also 
    responsible for setting the users cookies.
    */
    $users = isset($_COOKIE['users'])? unserialize($_COOKIE['users']) : $queryDb->getAllUsers();
    
?>


<!DOCTYPE html>
<html lang="en">
<!-- header -->
<?php include('includes/header.php'); ?>

<section class="container">
    <div class="heading">
        <h1>Hi Admin</h1>
    </div>

    <table>
        <thead>
            <tr>
                <td scope="col">S/N</td>
                <td scope="col">Full Name</td>
                <td scope="col">Email Address</td>
                <td scope="col">Created At</td>
                <td scope="col">Actions</td>
            </tr>
        </thead>
        <tbody>
            <!-- loop through users array to get individual user -->
            <?php foreach($users as $key=>$user): ?>
            <tr>
                <td data-label="S/N"><?php echo htmlspecialchars($key)?></td>
                <td data-label="Full Name"><?php echo htmlspecialchars($user["fullname"])?></td>
                <td data-label="Email Address"><?php echo htmlspecialchars($user["email"])?></td>
                <td data-label="Created At"><?php echo htmlspecialchars($user["created_at"])?></td>
                <td data-label="Actions"><a href="#">view</a></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</section>

<!-- footer -->
<?php include('includes/footer.php'); ?>

</html>