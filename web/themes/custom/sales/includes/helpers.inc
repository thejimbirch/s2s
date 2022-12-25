<?php

/**
 * @file
 * Helper Functions to support theming in the sales theme.
 */

/**
 * Helper: Check if field exists and not empty.
 *
 * @param object $entity
 *   Drupal Entity supporting fields.
 * @param mixed $field_name
 *   Either a string of a field name or an array of field names.
 *
 * @return bool
 *   TRUE if all field_names are valid on the entity, FALSE otherwise.
 */
function _sales_field_check($entity, $field_name) {
  $fields_list = [];

  // Check type of field_name parameter, assign to array if not already.
  if (gettype($field_name) === 'string') {
    $fields_list = [$field_name];
  }
  elseif (gettype($field_name) === 'array') {
    $fields_list = $field_name;
  }

  // Ensure all field names are valid.
  $is_valid = FALSE;
  if (!empty($fields_list)) {
    $valid_fields = array_filter($fields_list, function ($field) use ($entity) {
      return $entity && $entity->hasField($field) && !$entity->get($field)->isEmpty();
    });
    $is_valid = count($fields_list) === count($valid_fields);
  }
  return $is_valid;
}

/**
 * Helper: Generate link properties from link field.
 */
function _sales_link_helper($link, $options = []) {
  // Merge default options and user-provided options.
  $options_default = [
    'title' => 'Learn More',
    'modifiers' => [],
  ];
  $options = array_merge($options_default, $options);

  $link_output = [];
  $link_url = $link->getUrl()->toString();
  $link_target = $link->isExternal() ? '_blank' : '_self';
  $link_title = empty(trim($link->get('title')->getString())) ? $options['title'] : $link->get('title')->getString();
  $link_output = [
    'url' => $link_url,
    'title' => $link_title,
    'target' => $link_target,
    'modifiers' => $options['modifiers'],
  ];
  return $link_output;
}

/**
 * Helper: Generate image properties from image field.
 */
function _sales_image_with_focal($field) {
  $image_factory = \Drupal::service('image.factory');
  $file = $field->entity;
  $crop = \Drupal::service('focal_point.manager')->getCropEntity($file, 'focal_point');
  $fid = '';
  $image = '';
  $imageInfo = [];
  $css = '';
  $alt = '';
  $focalPoint = '50% 50%';
  $uri = '';

  if (isset($file->uri->value)) {
    $fid = $file->fid->getValue()[0]['value'];
    $uri = $file->uri->value;
    $image = \Drupal::service('file_url_generator')->generateAbsoluteString($uri);
    $image_info = $image_factory->get($file->getFileUri());
    $imageInfo['image_size'] = $image_info->getFileSize();
    $imageInfo['image_type'] = $file->getMimeType();
    $image_width = $image_info->getWidth();
    $image_height = $image_info->getHeight();
    $imageInfo['image_width'] = $image_width;
    $imageInfo['image_height'] = $image_height;
    if (isset($image_width) && isset($image_height)) {
      if ($crop->position()) {
        $focalTemp = $crop->position();
        if ($focalTemp) {
          $focal_x = (int) round($focalTemp['x'] / $image_width * 100);
          $focal_y = (int) round($focalTemp['y'] / $image_height * 100);
          $focalPoint = $focal_x . '% ' . $focal_y . '%';
        }
      }
    }
    // Alt tag.
    if (isset($field->getValue()['alt'])) {
      $alt = $field->getValue()['alt'];
    }
    if (isset($field->getValue()[0]['alt'])) {
      $alt = $field->getValue()[0]['alt'];
    }
  }

  $css = 'background-image: url( ' . $image . ' ); background-position: ' . $focalPoint . ';';
  return [
    'fid' => $fid,
    'src' => $image,
    'alt' => $alt,
    'focal' => $focalPoint,
    'css' => $css,
    'info' => $imageInfo,
    'uri' => $uri,
  ];
}
