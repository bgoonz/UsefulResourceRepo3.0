<!--


---
 "PHP : Service classes"
excerpt: "Service classes in PHP"
date: 2015-08-05 00:00:00 IST
updated: 2015-08-05 00:00:00 IST
categories: php
tags: php
---

-->
<!DOCTYPE html>
<html>

<head>
  <title>basic-git-workflow</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/bootstrap.grid.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="./css/bootstrap.css.map">
  <link rel="stylesheet" href="./css/blog-home.css">
  <link rel="stylesheet" href="./css/prism.css">
  <script async defer src="./css/prism.js"></script>
</head>

<body>

When I started with MVC in PHP, I used to write the whole logic in controller, then when I learned about `skinny controllers fat models` I reduced the code in controller and moved logic into models. But that was not enough. When a action which interacts with more than one model, then it doesn't make sense to write the logic in one of the model.

The code in controllers can't be reused much, so in some cases like placing an Order which has to deal with saving order, saving order items and address etc. Writing all the logic for this process in controller is not an ideal solution since if we want to place and order from some other action we need to duplicate the code.

So in order to make this more convenient and reusable I thought of abstracting the logic for creating the order into service classes. I got this idea of service classes from `Ruby on Rails`. So when I came back to PHP world I thought of using service classes.

The code snippets in this post are based on [Yii framework](yiiframework.com) Version 1.1.16 and since my intention is to give an overview on service classes, I am not going to explain any functions which I used.

So here is what my controller action looks like before using service classes for creating an order.

```php
<?php
  class OrdersController extends Controller {

    public function actionCreate() {
      try {
        $orderData  = Yii::app()->request->getParam('order');

        if(empty($orderData['items'])) {
          $this->_sendResponse(403, array(
            'status' => 'error', 'message' => 'Can\'t save order without items'
          ));
        }
        $items = $orderData['items'];
        unset($orderData['items']);
        try {
          $order = new Orders;
          $orderTransaction = $order->dbConnection->beginTransaction();
          if($order) {
            $address = Addresses::createIfDidntExist($orderData);
            unset($orderData['address']);
            $orderData['address_id'] = $address->id;
            $amount = 0;
            foreach ($items as $key => $item) {
              $amount += $item['total'];
            }
            $amount += $orderData['extra_charge'];
            $orderData['amount'] = $amount;
            $order->attributes = $orderData;
            if($order->save()) {
              if(OrderItems::batchSave($items, $order->id)) {
                $orderTransaction->commit();
                $this->sendMail($order->id);
                $this->_sendResponse(200, array(
                  'status' => 'success', 'message' => 'Order placed successfully.'
                ));
              }
              $orderTransaction->rollback();
              $this->_sendResponse(403, array(
                'status' => 'error', 'message' => 'Order creation failed'
              ));
            }
            else {
              $orderTransaction->rollback();
              $this->_sendResponse(403, array(
                'status' => 'error', 'errors' => $order->getErrors()
              ));
            }
          }
        }
        catch(Exception $e) {
          $orderTransaction->rollback();
          $this->_sendResponse(403, array(
            'status' => 'error', 'message' => $e->getMessage()
          ));
        }
      }
      catch(Exception $e) {
        $this->_sendResponse(403, array(
          'status' => 'error', 'message' => $e->getMessage()
        ));
      }
    }

  public function sendMail($order_id) {
    // logic to send email after placing an order successfully
  }

?>
```

All the logic and exception handling is happening in controller itself and can't be reused when I need to the same functionality from another action. Also the above code is really difficult to unit test.

Then I moved the whole logic to `OrdersService` class which now looks like,

```php
<?php

class OrdersService {
  public function create($orderData) {

    if(empty($orderData['items'])) {
      throw new OrdersServiceException('Order items can\'t be empty.');
    }
    $items = $orderData['items'];
    unset($orderData['items']);
    try {
      $order = new Orders;
      $orderTransaction = $order->dbConnection->beginTransaction();

      $address = Addresses::createIfDidntExist($orderData);
      unset($orderData['address']);
      $orderData['address_id'] = $address->id;
      $amount = 0;
      foreach ($items as $key => $item) {
        $amount += $item['total'];
      }
      $amount += $orderData['extra_charge'];
      $orderData['amount'] = $amount;
      $order->attributes = $orderData;
      if($order->save()) {
        if(OrderItems::batchSave($items, $order->id)) {
          $orderTransaction->commit();
          $this->sendMail($order->id);
          return array('status' => 'success');
        }
        $orderTransaction->rollback();
        throw new OrdersServiceException("Failed to save the items.", 1);
      }
      else {
        // handle validation errors
        $orderTransaction->rollback();
        return array('status' => 'error', 'errors' => $order->getErrors());
      }
    }
    catch(Exception $e) {
      $orderTransaction->rollback();
      throw new Exception('Something wrong happened');
    }
  }

  public function sendMail($order_id) {
    // logic to send email after placing an order successfully
  }
}

class OrdersException extends Exception {

}
?>
```

Now I am raising an exception for all the errors, except for the validation errors. So I can catch the exception where ever I am using this service and show the errors according to the action like either render error message or send back a JSON with status _error_.

Once I moved the order creation logic to service class, now my controller action looks like,

```php
<?php
  class OrdersController extends Controller {
    public function actionCreate() {
      $orderData = Yii::app()->request->getParam('order');
      try {
        $order = new OrdersService();
        $res = $order->create($orderData);
        if(isset($res['status']) && $res['status'] == 'success') {
            $res['message'] = 'Order placed successfully.';
            $this->_sendResponse(200, $res);
        }
        $this->_sendResponse(403, $res);
      }
      catch(OrdersServiceException $e) {
        $this->_sendResponse(403, array(
          'status' => 'error', 'message' => $e->getMessage()
        ));
      }
      catch(Exception $e) {
        $this->_sendResponse(403, array(
          'status' => 'error', 'message' => $e->getMessage()
        ));
      }
    }
  }
?>
```

Now the controller have only code which is need to this action. we don't have reuse anything from this because how to display error depends on that particular action.

Hope I gave you a basic idea on service classes. If you have any queries, please drop a comment.

Thank You.
